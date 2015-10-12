WinWaitActive("Open")
#comments-start
$dir = @WorkingDir & "\" & "post-production-route.gpx"
ConsoleWrite($dir)
Send($dir)
#comments-end
Send("C:\Users\rkkunaparaju\work\osmaps-web-test\html5-automationtest\src\test\resources\testdata\post-production-route.gpx")
Send("{ENTER}")