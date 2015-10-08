$dir = @WorkingDir & "\post production route.gpx"
WinWaitActive("File Upload")
Send($dir)
Sleep(1000)
Send("{ENTER}")