export default {
  title: '依赖包',
  nav: [
    {
      title: 'GUI',
      nav: [
        {
          icon: 'https://avatars3.githubusercontent.com/u/36045855?s=200&v=4',
          name: 'Fyne',
          desc: '基于Material Design的Go跨平台GUI',
          url: 'https://fyne.io/',
          language: [
            '',
            '',
            'https://github.com/fyne-io/fyne'
          ]
        },
      ]
    },
    {
      title: '日志模块',
      nav: [
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'logrus',
          desc: 'Go的结构化，可插入日志记录。',
          url: 'https://github.com/sirupsen/logrus',
        },
        {
          icon: 'https://avatars3.githubusercontent.com/u/19262598?s=200&v=4',
          name: 'zap',
          desc: '在Go中实现快速，结构化，水平的日志记录。',
          url: 'https://github.com/uber-go/zap',
        },
      ]
    },
    {
      title: '数据库',
      nav: [
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'gorm',
          desc: '适用于Golang的绝佳ORM库，旨在对开发人员友好',
          url: 'https://gorm.io/zh_CN/',
          language: [
            'https://gorm.io/',
            'https://gorm.io/zh_CN/',
            'https://github.com/go-gorm/gorm'
          ]
        },
        {
          icon: 'https://entgo.io/img/favicon.ico',
          name: 'ent',
          desc: '用于Go的简单但功能强大的实体框架，可轻松构建和维护具有大型数据模型的应用程序。',
          url: 'https://entgo.io/',
          language: [
            '',
            '',
            'https://github.com/facebook/ent'
          ]
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'mysql',
          desc: 'Go MySQL驱动程序是Go（golang）数据库/ sql包的MySQL驱动程序',
          url: 'https://github.com/go-sql-driver/mysql',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'sqlite3',
          desc: 'sqlite3驱动程序',
          url: 'https://github.com/mattn/go-sqlite3',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'pq',
          desc: '适用于database/sql的Pure Go Postgres驱动程序',
          url: 'https://github.com/lib/pq',
        },
        {
          icon: 'https://redis.uptrace.dev/assets/images/favicon.png',
          name: 'redis',
          desc: '用于Golang的类型安全的Redis客户端',
          url: 'https://redis.uptrace.dev/',
          language: [
            '',
            '',
            'https://github.com/go-redis/redis'
          ]
        },
      ]
    },
    {
      title: '解析器',
      nav: [
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'json-iterator',
          desc: '高性能100％兼容的“ encoding / json”替代产品',
          url: 'http://jsoniter.com/migrate-from-go-std.html',
          language: [
            '',
            '',
            'https://github.com/json-iterator/go'
          ]
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'blackfriday',
          desc: 'Markdown处理器，安全、快速。',
          url: 'https://github.com/russross/blackfriday',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'goldmark',
          desc: '用Go语言编写的markdown解析器。易于扩展，符合标准（CommonMark），结构合理。',
          url: 'https://github.com/yuin/goldmark',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'goquery',
          desc: '接近jQuery语法的DOM解析库',
          url: 'https://github.com/PuerkitoBio/goquery',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'go-yaml',
          desc: 'yaml包使Go程序能够轻松地对yaml值进行编码和解码, 可以快速可靠地解析和生成YAML数据。',
          url: 'https://github.com/go-yaml/yaml/tree/v3',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'xurls',
          desc: '从文本中提取Urls',
          url: 'https://github.com/mvdan/xurls',
        },
      ]
    },
    {
      title: '参数验证',
      nav: [
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'govalidator',
          desc: '参数验证程序，用于字符串，数字，切片和结构',
          url: 'https://github.com/asaskevich/govalidator',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'validator',
          desc: '基于标签对结构和各个字段实现值验证。',
          url: 'https://github.com/go-playground/validator',
        },
      ]
    },
    {
      title: '其他',
      nav: [
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'ip',
          desc: '获取公网IP地址、v4/v6',
          url: 'https://github.com/xjh22222228/ip',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'terminal',
          desc: '提供了用于处理终端的支持功能，这在UNIX系统上很常见',
          url: 'https://godoc.org/golang.org/x/crypto/ssh/terminal',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'gopsutil',
          desc: '用于检索正在运行的进程和系统利用率（CPU，内存，磁盘，网络，传感器）的信息。它主要用于系统监视，概要分析和限制进程资源以及管理正在运行的进程',
          url: 'https://github.com/shirou/gopsutil',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'air',
          desc: 'Go热重载',
          url: 'https://github.com/cosmtrek/air',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'go-micro',
          desc: '分布式系统开发框架',
          url: 'https://go-micro.dev',
          language: [
            '',
            '',
            'https://github.com/micro/go-micro'
          ]
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'xlsx',
          desc: 'xlsx是一个库，用于简化在Go程序中读写Microsoft Excel最新版本使用的XML格式。',
          url: 'https://github.com/tealeg/xlsx',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'email',
          desc: 'Go强大而灵活的电子邮件库。',
          url: 'https://github.com/jordan-wright/email',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'websocket',
          desc: 'Go的一种快速，经过测试且广泛使用的WebSocket实现',
          url: 'https://github.com/gorilla/websocket',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'jwt-go',
          desc: 'Golang 实现的 JSON WEB TOKEN',
          url: 'https://github.com/dgrijalva/jwt-go',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'cron',
          desc: 'Go 实现的 cron 包',
          url: 'https://github.com/robfig/cron',
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'qrcode',
          desc: '二维码生成',
          url: 'https://github.com/skip2/go-qrcode',
        },
        {
          icon: 'https://avatars3.githubusercontent.com/u/27810343?s=200&v=4',
          name: 'casbin',
          desc: '权限管理库，支持Golang中的访问控制模型，如ACL，RBAC，ABAC',
          url: 'https://casbin.org/zh-CN/',
          language: [
            '',
            '',
            'https://github.com/casbin/casbin'
          ]
        },
        {
          icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
          name: 'resty',
          desc: '用于Go的简单HTTP和REST客户端库',
          url: 'https://github.com/go-resty/resty',
        },
        {
          icon: 'https://grpc.io/favicons/apple-touch-icon.png',
          name: 'grpc-go',
          desc: 'gRPC的Go语言实现。基于HTTP/2的RPC',
          url: 'https://grpc.io/',
          language: [
            '',
            '',
            'https://github.com/grpc/grpc-go'
          ]
        },
        {
          icon: 'https://avatars2.githubusercontent.com/u/33584194?s=200&v=4',
          name: 'colly',
          desc: 'Colly提供了一个干净的界面来编写任何种类的爬虫',
          url: 'http://go-colly.org/',
          language: [
            '',
            '',
            'https://github.com/gocolly/colly'
          ]
        },
      ]
    },
  ]
}