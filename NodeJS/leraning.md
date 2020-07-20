### 为何要讲router与controller分开 ###

router 只与路由相关的,是什么路由就分配什么数据,返回给客户端什么数据格式

controller 只处理数据

#### 为什么使用mysql ####

mysql 是企业最常使用的存储工具,有专人运维
mysql 是社区中常用的存储工具


#### session ####

session 直接放在 node环境中造成内存不断增加

#### redis ####

使用内存存储

#### nginx ####

反向代理 同域名下对api与页面进行代理
localhost:8081 => localhost:8080
localhost:9000/api => localhost:8080