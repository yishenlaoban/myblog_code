---
title: 十三、Redis主从复制
date: 2022-02-13
categories:
 - 数据库
tags:
 - Nosql
 - Redis
sidebar: 'auto'
---

## 十三、Redis主从复制

### 概念

​          主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点（Master/Leader）,后者称为从节点（Slave/Follower）， ==数据的复制是单向的！只能由主节点复制到从节点==（主节点以写为主、从节点以读为主）。

​          默认情况下，每台Redis服务器都是主节点，一个主节点可以有0个或者多个从节点，但每个从节点只能由一个主节点。

### 作用

* ==数据冗余==：主从复制实现了数据的热备份，是持久化之外的一种数据冗余的方式。
* ==故障恢复==：当主节点故障时，从节点可以暂时替代主节点提供服务，是一种服务冗余的方式
* ==负载均衡==：在主从复制的基础上，配合读写分离，由主节点进行写操作，从节点进行读操作，分担服务器的负载；尤其是在多读少写的场景下，通过多个从节点分担负载，提高并发量。
* ==高可用基石==：主从复制还是哨兵和集群能够实施的基础。

### 为什么使用集群

1. 单台服务器难以负载大量的请求
2. 单台服务器故障率高，系统崩坏概率大
3. 单台服务器内存容量有限。

### 环境配置

我们在讲解配置文件的时候，注意到有一个`replication`模块 (见Redis.conf中第8条)

查看当前库的信息：`info replication`

```bash
127.0.0.1:6379> info replication
# Replication
role:master  # 角色
connected_slaves:0  # 从机数量
master_replid:3b54deef5b7b7b7f7dd8acefa23be48879b4fcff
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0
```

### 模拟多个redis-server

既然需要启动多个服务，就需要多个配置文件。每个配置文件对应修改以下信息：

- 端口号  
- pid文件名
- 日志文件名
- rdb文件名

然后==用不同的配置文件启动redis-server== 即可

启动单机多服务集群：

![image-20220212210050607](https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212210050607.png) 



### 一主二从配置

==默认情况下，每台Redis服务器都是主节点；==我们一般情况下只用配置从机就好了！

==认老大！==一主（79）二从（80，81）

在从机中使用`SLAVEOF host port`就可以为从机配置主机了。

注：在命令行修改配置，和配置主从复制，只在当前启动的进程中有效，如果想要永久生效必须改配置，重启服务

![image-20220212210736657](https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212210736657.png) 

**从机状态**

![image-20220212211105526](https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212211105526.png) 

**然后主机上也能看到从机的状态：**

![image-20220212211141272](https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212211141272.png) 



### 使用规则

1. 从机只能读，不能写，主机可读可写但是多用于写。

   ```bash
    127.0.0.1:6381> set name sakura # 从机6381写入失败
   (error) READONLY You can't write against a read only replica.
   
   127.0.0.1:6380> set name sakura # 从机6380写入失败
   (error) READONLY You can't write against a read only replica.
   
   127.0.0.1:6379> set name sakura
   OK
   127.0.0.1:6379> get name
   "sakura"
   
   ```

2. 当==主机断电宕机==后，默认情况下从机的==角色不会发生变化== ，集群中只是失去了写操作，当主机恢复以后，又会连接上从机恢复原状。

3. 当==从机断电宕机==后，若不是使用配置文件配置的从机，再次启动后作为主机是无法获取之前主机的数据的，若此时重新配置称为从机，又可以获取到主机的所有数据。这里就要提到一个同步原理。

4. 第二条中提到，默认情况下，主机故障后，不会出现新的主机，有两种方式可以产生新的主机：

​           1.  从机手动执行命令`slaveof no one`,这样执行以后从机会独立出来成为一个主机

​            2.  使用哨兵模式（自动选举）

>  如果没有老大了，这个时候能不能选择出来一个老大呢？手动！

如果主机断开了连接，我们可以使用`SLAVEOF no one`让自己变成主机！其他的节点就可以手动连接到最新的主节点（手动）！如果这个时候老大修复了，他也不会是老大了，那么就重新连接！