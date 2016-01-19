<?php
/**
 * Created by PhpStorm.
 * User: ypalaguta
 * Date: 12.01.2016
 * Time: 13:02
 */
?>

<div class="modalWindow" id="modalSettings" style="display: none;">
    <div class="modalMain">
        <div class="modalTitle"> Settings
        <div class="settingsIcon">&nbsp;</div>
        </div>
        <div class="modalBody">

            <div class="item_value_wrap">
        <div class="modalItem">Speed</div>

            <div class="modalValue">
                <div id="speedSlider"></div>
                <div id="sliderValue">300</div>
            </div>
            </div>

            <div class="item_value_wrap">
        <div class="modalItem">Mode</div>

            <div class="modalValue"><select id="modeSelect">
                    <option value="0">None</option>
                    <option value="1">Acid</option>
                    <option value="2">Gray</option>
                    <option value="3">Sharpness</option>
                </select>
            </div>
            </div>

            <div class="item_value_wrap">
        <div class="modalItem">Upload img</div>

            <div class="modalValue" id="fileButton">
                    <label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Choose a file...</span></label>
                <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="">

            </div>
            </div>

            <div class="item_value_wrap">
        <div class="modalItem">Img width</div>

            <div class="modalValue">
                <input type="text" value="" placeholder="auto" id="imgHeight"/>
                 </div>
                 </div>

            <div class="item_value_wrap">
        <div class="modalItem">Img height</div>

            <div class="modalValue">
                <input type="text" value="" placeholder="auto" id="imgWidth"/>
            </div>
            </div>

        </div>
        <div class="modalFooter">
            <div class="close">Close
            </div><div class="restore_default">Restore default
            </div><div class="apply">Apply</div>
        </div>
    </div>
</div>