$dir = @WorkingDir & "\post production route.gpx"
ConsoleWrite($dir)
WinWaitActive("Open")
Send($dir)
Send("{ENTER}")