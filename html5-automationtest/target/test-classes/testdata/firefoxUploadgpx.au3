$dir = @WorkingDir & "\post production route.gpx"
WinWaitActive("File Upload")
Send($dir)
Send("{ENTER}")