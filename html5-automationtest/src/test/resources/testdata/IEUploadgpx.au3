$dir = @WorkingDir & "\post production route.gpx"
WinWaitActive("Choose File to Upload")
Send($dir)
Send("{ENTER}")