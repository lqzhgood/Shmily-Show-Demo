@echo off

:: 移动到当前目录
cd %cd%

:: 移动到服务端 
:: 服务端的 web root 配置写的 ..\..\
cd .\tools\webServer\
start .\webd.exe

:: 启动 Chrome 打开页面
cd ..\..\
start .\tools\Chrome\MyChrome.exe http://127.0.0.1:55988/index.html