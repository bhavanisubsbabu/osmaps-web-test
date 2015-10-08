$dir = @WorkingDir & "\post production route.gpx"
WinWaitActive("Choose File to Upload")
Send($dir)
Sleep(1000)
Send("{ENTER}")