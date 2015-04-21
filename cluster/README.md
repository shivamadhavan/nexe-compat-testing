Nexe compatibility while using the cluster module(iojs 1.8.1 & 1.7.1)
=====================================================================

The environment used for this testing:

OS: Windows 7 64-bit
iojs: 1.8.1 32-bit
nexe version: latest from crcn/nexe (master)
nexe compilation target arch: 32-bit

Command line used for compilation: **nexe -i cluster\master.js -o master.exe --framework iojs**

Command line for execution: **master.exe**

Error message: The master continues to run but the worker quits with the message **"<Path_To_Master>\master.exe: bad option: --child_process"**

