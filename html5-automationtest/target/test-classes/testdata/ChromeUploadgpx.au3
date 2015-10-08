$dir = @WorkingDir & "\post production route.gpx"
WinWaitActive("Open")
Send($dir)
Sleep(1000)
Send("{ENTER}")