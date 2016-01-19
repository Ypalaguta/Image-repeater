<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>XP bug emulator</title>
    <link href="css/main.css" rel="stylesheet" type="text/css"/>
    <link href="css/modal.css" rel="stylesheet" type="text/css"/>
    <link href="css/jquery.ui.slider.css" rel="stylesheet" type="text/css"/>

    <script src="js/jquery-2.2.0.min.js" type="text/javascript"> </script>
    <script src="js/jquery-ui-1.9.2.custom.min.js" type="text/javascript"> </script>
    <script src="js/main.js" type="text/javascript"> </script>
    <script src="js/modal.js" type="text/javascript"> </script>
</head>
<body>

<? include 'modal.php'; ?>

<header id="nav">
<div id="triggerBegin" title="Begin" onclick="placeBlock()">&nbsp;</div>
<div id="triggerPause" title="Pause" onclick="pauseState()">&nbsp;</div>
<div id="settings" title="Settings" onclick="showSettings()">&nbsp;</div>
<div id="highlightBlock" title="Highlight block" onclick="highlightBlock()">&nbsp;</div>
<div id="clearState" title="Clear state" onclick="clearState()">&nbsp;</div>
</header>

<main id="programWindow"></main>

</body>
</html>