function newapp() {
    document.getElementById("windows").innerHTML+= `<div class="window window-default" data-window="" id="window-explorer">
        <input class="toggle-menu" data-menu="" hidden="" id="explorer-menu" type="checkbox">
        <input checked="" class="menu-status-bar" hidden="" id="explorer-menu-status-bar" type="checkbox">
        <input class="menu-large-icons" hidden="" id="explorer-menu-large-icons" name="explorer-icon-size" type="radio">
        <input class="menu-small-icons" hidden="" id="explorer-menu-small-icons" name="explorer-icon-size" type="radio">
        <input checked="" class="menu-list-icons" hidden="" id="explorer-menu-list-icons" name="explorer-icon-size" type="radio">
        <div class="window-inside">
          <nav class="window-nav">
            <h3 class="label-folder-explorer-small">
              <span>
                <span class="title-explorer-desktop">Exploring - Desktop</span>
                <span class="title-explorer-computer">Exploring - Computer</span>
                <span class="title-explorer-disk">Exploring - Ms-dos_5 (C:)</span>
                <span class="title-explorer-dos">Exploring - Dos</span>
                <span class="title-explorer-program-files">Exploring - Program Files</span>
                <span class="title-explorer-windows">Exploring - Windows</span>
                <span class="title-explorer-control-panel">Exploring - Control Panel</span>
                <span class="title-explorer-printers">Exploring - Printers</span>
                <span class="title-explorer-recycle-bin">Exploring - Recycle Bin</span>
              </span>
            </h3>
            <div class="buttons">
              <label class="minimize" for="explorer-minimize" tabindex="0"></label>
              <label class="maximize" for="explorer-maximize" tabindex="0"></label>
              <label class="close" for="explorer" tabindex="0"></label>
            </div>
          </nav>
          <menu class="window-menu underline">
            <label class="toggle-menu-label" data-toggle="" for="explorer-menu"></label>
            <li>
              <a class="menu-item-file" data-label="" href="#">File</a>
              <menu class="sub-menu underline">
                <li>
                  <a class="label-nested">
                    <span><span>Ne</span><span class="line">w</span></span>
                  </a>
                  <menu class="sub-menu underline">
                    <li>
                      <label class="label-disabled">Folder</label>
                    </li>
                    <li>
                      <label class="label-disabled">Shortcut</label>
                    </li>
                    <li>
                      <hr>
                    </li>
                    <li>
                      <label class="label-disabled no-line">Text Document</label>
                    </li>
                  </menu>
                </li>
                <li>
                  <hr>
                </li>
                <li>
                  <label class="label-disabled">
                    <span><span>Create&nbsp;</span><span class="line">Shortcut</span></span>
                  </label>
                </li>
                <li>
                  <label class="label-disabled">Delete</label>
                </li>
                <li>
                  <label class="label-disabled">
                    <span><span>Rena</span><span class="line">me</span></span>
                  </label>
                </li>
                <li>
                  <label class="label-disabled">Properties</label>
                </li>
                <li>
                  <hr>
                </li>
                <li>
                  <label for="explorer" tabindex="0">Close</label>
                </li>
              </menu>
            </li>
            <li>
              <a class="menu-item-edit" data-label="" href="#">Edit</a>
              <menu class="sub-menu underline">
                <li><label class="label-disabled">Undo</label></li><li><hr></li><li><label class="label-disabled"><span><span>Cu</span><span class="line">t</span></span></label></li><li><label class="label-disabled">Copy</label></li><li><label class="label-disabled">Paste</label></li>
                <li><label class="label-disabled"><span><span>Paste&nbsp;</span><span class="line">Shortcut</span></span></label></li><li><hr></li><li><label class="label-disabled"><span><span>Select&nbsp;</span><span class="line">All</span></span></label></li><li><label class="label-disabled">Invert Selection</label></li>
              </menu>
            </li>
            <li>
              <a class="menu-item-view" data-label="" href="#">View</a>
              <menu class="sub-menu underline">
                <li>
                  <label class="label-disabled">Toolbar</label>
                </li>
                <li>
                  <label class="label-check label-status-bar" for="explorer-menu-status-bar">
                    <span><span>Status&nbsp;</span><span class="line">Bar</span></span>
                  </label>
                </li>
                <li>
                  <hr>
                </li>
                <li>
                  <label class="label-check label-icon-size label-large-icons" for="explorer-menu-large-icons">
                    <span><span>Lar</span><span class="line">ge Icons</span></span>
                  </label>
                </li>
                <li>
                  <label class="label-check label-icon-size label-small-icons" for="explorer-menu-small-icons">
                    <span><span>S</span><span class="line">mall Icons</span></span>
                  </label>
                </li>
                <li>
                  <label class="label-check label-icon-size label-list-icons" for="explorer-menu-list-icons">
                    <span class="line">List</span>
                  </label>
                </li>
                <li>
                  <label class="label-disabled">Details</label>
                </li>
                <li>
                  <hr>
                </li>
                <li><a class="label-nested"><span><span>Arrange&nbsp;</span><span class="line">Icons</span></span></a><menu class="sub-menu underline"><li><label class="label-disabled"><span><span>by&nbsp;</span><span class="line">Name</span></span></label></li><li><label class="label-disabled"><span><span>by&nbsp;</span><span class="line">Type</span></span></label></li><li><label class="label-disabled"><span><span>by&nbsp;Si</span><span class="line">ze</span></span></label></li><li><label class="label-disabled"><span><span>by&nbsp;</span><span class="line">Date</span></span></label></li><li><hr></li><li><label class="label-disabled">Auto Arrange</label></li></menu></li><li><label class="label-disabled"><span><span>Lin</span><span class="line">e up Icons</span></span></label></li><li><hr></li><li><label class="label-disabled">Refresh</label></li><li><label class="label-disabled">Options...</label></li>
              </menu>
            </li>
            <li>
              <a class="menu-item-tools" data-label="" href="#">Tools</a>
              <menu class="sub-menu underline">
                <li>
                  <a class="label-nested">Find</a>
                  <menu class="sub-menu underline">
                    <li>
                      <label class="label-disabled">Files or Folders</label>
                    </li>
                  </menu>
                </li>
                <li>
                  <hr>
                </li>
                <li>
                  <label class="label-disabled">Go to...</label>
                </li>
              </menu>
            </li>
            <li>
              <a class="menu-item-help" data-label="" href="#">Help</a>
              <menu class="sub-menu underline"><li><label class="label-disabled">Help Topics</label></li><li><hr></li><li><label class="label-disabled">About Windows 95</label></li></menu>
            </li>
          </menu>
          <div class="window-content">
            <div class="folders above-footer">
              <h4>All Folders</h4>
              <div class="list-container">
                <menu class="list">
                  <li>
                    <label class="label-desktop-small" for="explorer-desktop" tabindex="0">
                      <span>Desktop</span>
                    </label>
                    <menu>
                      <li>
                        <label class="label-toggle toggle-computer" for="toggle-computer"></label>
                        <label class="label-computer-small" for="explorer-computer" tabindex="0">
                          <span>My Computer</span>
                        </label>
                        <menu>
                          <li>
                            <label class="label-toggle toggle-error-a" for="error-diskette-a"></label>
                            <label class="label-diskette-small" for="error-diskette-a" tabindex="0">
                              <span>5¼ Floppy (A:)</span>
                            </label>
                          </li>
                          <li>
                            <label class="label-toggle toggle-error-b" for="error-diskette-b"></label>
                            <label class="label-diskette-small" for="error-diskette-b" tabindex="0">
                              <span>5¼ Floppy (B:)</span>
                            </label>
                          </li>
                          <li>
                            <label class="label-toggle toggle-disk" for="toggle-disk"></label>
                            <label class="label-disk-small" for="explorer-disk" tabindex="0">
                              <span>Ms-dos_5 (C:)</span>
                            </label>
                            <menu>
                              <li>
                                <label class="label-folder-small" for="explorer-dos" tabindex="0">
                                  <span>Dos</span>
                                </label>
                              </li>
                              <li>
                                <label class="label-toggle toggle-program-files" for="toggle-program-files"></label>
                                <label class="label-folder-small" for="explorer-program-files" tabindex="0">
                                  <span>Program Files</span>
                                </label>
                                <menu>
                                  <li>
                                    <label class="label-folder-small long">Microsoft Exchange</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small long">The Microsoft Network</label>
                                  </li>
                                </menu>
                              </li>
                              <li>
                                <label class="label-toggle toggle-windows" for="toggle-windows"></label>
                                <label class="label-folder-small" for="explorer-windows" tabindex="0">
                                  <span>Windows</span>
                                </label>
                                <menu>
                                  <li>
                                    <label class="label-folder-small">Command</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Config</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Cursors</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Fonts</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Help</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Media</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">SendTo</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Start Menu</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">System</label>
                                  </li>
                                  <li>
                                    <label class="label-folder-small">Temp</label>
                                  </li>
                                </menu>
                              </li>
                            </menu>
                          </li>
                          <li>
                            <label class="label-control-panel-small" for="explorer-control-panel" tabindex="0">
                              <span>Control Panel</span>
                            </label>
                          </li>
                          <li>
                            <label class="label-folder-printers-small" for="explorer-printers" tabindex="0">
                              <span>Printers</span>
                            </label>
                          </li>
                        </menu>
                        </li><li>
                          <label class="label-recycle-bin-small" for="explorer-recycle-bin" tabindex="0">
                            <span>Recycle Bin</span>
                          </label>
                        </li>
                      </menu></li>
                    </menu>
                  
                
              </div>
            </div>
            <div class="folders-content above-footer">
              <div class="content content-explorer-desktop">
                <h5>Contents of Desktop</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-computer-small" for="explorer-computer" tabindex="0">
                        <span>My Computer</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-inbox-small">
                        <span>Inbox</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-recycle-bin-small">
                        <span>Recycle Bin</span>
                      </label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-computer">
                <h5>Contents of My Computer</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-diskette-small" for="error-diskette-a" tabindex="0">
                        <span>5¼ Floppy (A:)</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-diskette-small" for="error-diskette-b" tabindex="0">
                        <span>5¼ Floppy (B:)</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-disk-small" for="explorer-disk" tabindex="0">
                        <span>Ms-dos_5 (C:)</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-control-panel-small" for="explorer-control-panel" tabindex="0">
                        <span>Control Panel</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-folder-printers-small" for="explorer-printers" tabindex="0">
                        <span>Printers</span>
                      </label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-disk">
                <h5>Contents of Ms-dos_5 (C:)</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-folder-small" for="explorer-dos" tabindex="0">
                        <span>Dos</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-folder-small" for="explorer-program-files" tabindex="0">
                        <span>Program Files</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-folder-small" for="explorer-windows" tabindex="0">
                        <span>Windows</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-program-config-small">Autoexec</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Autoexec.dos</label>
                    </li>
                    <li>
                      <label class="label-program-small">Command</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Command.dos</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Config.dos</label>
                    </li>
                    <li>
                      <label class="label-program-config-small">Dbg</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Netlog</label>
                    </li>
                    <li>
                      <label class="label-program-small">Wdeb386</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-dos">
                <h5>Contents of Dos</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-document-windows-small">4201.cpi</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">4208.cpi</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">5202.cpi</label>
                    </li>
                    <li>
                      <label class="label-program-small">Append</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Appnotes</label>
                    </li>
                    <li>
                      <label class="label-program-small">Assign</label>
                    </li>
                    <li>
                      <label class="label-program-small">Attrib</label>
                    </li>
                    <li>
                      <label class="label-program-small">Backup</label>
                    </li>
                    <li>
                      <label class="label-program-small">Chkdsk</label>
                    </li>
                    <li>
                      <label class="label-program-small">Command</label>
                    </li>
                    <li>
                      <label class="label-program-small">Comp</label>
                    </li>
                    <li>
                      <label class="label-program-config-small">Dblspace</label>
                    </li>
                    <li>
                      <label class="label-program-small">Debug</label>
                    </li>
                    <li>
                      <label class="label-program-config-small">Defrag</label>
                    </li>
                    <li>
                      <label class="label-program-small">Diskcomp</label>
                    </li>
                    <li>
                      <label class="label-program-small">Diskcopy</label>
                    </li>
                    <li>
                      <label class="label-help-small">Doshelp</label>
                    </li>
                    <li>
                      <label class="label-program-small">Doskey</label>
                    </li>
                    <li>
                      <label class="label-program-small">Dosshell</label>
                    </li>
                    <li>
                      <label class="label-program-small">Dosshell</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Dosshell.grb</label>
                    </li>
                    <li>
                      <label class="label-help-small">Dosshell</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Dosshell</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Dosshell.vid</label>
                    </li>
                    <li>
                      <label class="label-program-small">Dosswap</label>
                    </li>
                    <li>
                      <label class="label-program-config-small">Drvspace</label>
                    </li>
                    <li>
                      <label class="label-program-small">Edit</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-program-files">
                <h5>Contents of Program Files</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-folder-small long">Microsoft Exchange</label>
                    </li>
                    <li>
                      <label class="label-folder-small long">The Microsoft Network</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-windows">
                <h5>Contents of Windows</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-folder-small">Command</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Config</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Cursors</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Fonts</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Help</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Media</label>
                    </li>
                    <li>
                      <label class="label-folder-small">SendTo</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Start Menu</label>
                    </li>
                    <li>
                      <label class="label-folder-small">System</label>
                    </li>
                    <li>
                      <label class="label-folder-small">Temp</label>
                    </li>
                    <li>
                      <label class="label-document-misc-small">Accessor</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Black Thatch</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Blue Rivets</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Bubbles</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Carved Stone</label>
                    </li>
                    <li>
                      <label class="label-document-windows-small">Circles</label>
                    </li>
                    <li>
                      <label class="label-program-small">Command</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Config</label>
                    </li>
                    <li>
                      <label class="label-program-small">Control</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Control</label>
                    </li>
                    <li>
                      <label class="label-document-misc-small">Desktop</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Display</label>
                    </li>
                    <li>
                      <label class="label-document-misc-small">Document</label>
                    </li>
                    <li>
                      <label class="label-program-small">Dosprmpt</label>
                    </li>
                    <li>
                      <label class="label-program-small">Emm386</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Exchange</label>
                    </li>
                    <li>
                      <label class="label-document-misc-small">Exchng32</label>
                    </li>
                    <li>
                      <label class="label-computer-small">Explorer</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Extra</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">Faq</label>
                    </li>
                    <li>
                      <label class="label-document-font-small">Fontview</label>
                    </li>
                    <li>
                      <label class="label-document-text-small">General</label>
                    </li>
                    <li>
                      <label class="label-grpconv-small">Grpconv</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-control-panel">
                <h5>Contents of Control Panel</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-hardware-small">Add New Hardware</label>
                    </li>
                    <li>
                      <label class="label-add-programs-small">Add/Remove Programs</label>
                    </li>
                    <li>
                      <label class="label-date-time-small">Date/Time</label>
                    </li>
                    <li>
                      <label class="label-computer-display-small">Display</label>
                    </li>
                    <li>
                      <label class="label-folder-fonts-link-small">Fonts</label>
                    </li>
                    <li>
                      <label class="label-internet-small">Internet</label>
                    </li>
                    <li>
                      <label class="label-joystick-small">Joystick</label>
                    </li>
                    <li>
                      <label class="label-keyboard-small">Keyboard</label>
                    </li>
                    <li>
                      <label class="label-inbox-small">Mail</label>
                    </li>
                    <li>
                      <label class="label-modems-small">Modems</label>
                    </li>
                    <li>
                      <label class="label-mouse-small">Mouse</label>
                    </li>
                    <li>
                      <label class="label-multimedia-small">Multimedia</label>
                    </li>
                    <li>
                      <label class="label-network-small">Network</label>
                    </li>
                    <li>
                      <label class="label-passwords-small">Passwords</label>
                    </li>
                    <li>
                      <label class="label-battery-small">Power</label>
                    </li>
                    <li>
                      <label class="label-folder-printers-link-small" for="explorer-printers" tabindex="0">
                        <span>Printers</span>
                      </label>
                    </li>
                    <li>
                      <label class="label-regional-small">Regional Settings</label>
                    </li>
                    <li>
                      <label class="label-computer-sounds-small">Sounds</label>
                    </li>
                    <li>
                      <label class="label-computer-mouse-small">System</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-printers">
                <h5>Contents of Printers</h5>
                <div class="list-container">
                  <menu class="list">
                    <li>
                      <label class="label-document-printer-small">Add Printer</label>
                    </li>
                  </menu>
                </div>
              </div>
              <div class="content content-explorer-recycle-bin">
                <h5>Contents of Recycle Bin</h5>
                <div class="list-container">
                  <menu class="list"></menu>
                </div>
              </div>
            </div>
            <footer class="window-footer">
              <ul class="number">
                <li class="explorer-number-desktop">3 object(s)</li>
                <li class="explorer-number-computer">0 object(s)</li>
                <li class="explorer-number-disk">11 object(s) (plus 14 hidden)</li>
                <li class="explorer-number-dos">27 object(s) (plus 57 hidden)</li>
                <li class="explorer-number-program-files">2 object(s)</li>
                <li class="explorer-number-windows">33 object(s) (plus 77 hidden)</li>
                <li class="explorer-number-control-panel">15 object(s)</li>
                <li class="explorer-number-printers">1 object(s)</li>
                <li class="explorer-number-recycle-bin">0 object(s)</li>
              </ul>
              <ul class="space">
                <li class="explorer-space-disk">954KB (Disk free space: 31.1MB)</li>
                <li class="explorer-space-dos">2.09MB (Disk free space: 31.1MB)</li>
                <li class="explorer-space-program-files">0 bytes (Disk free space: 31.1MB)</li>
                <li class="explorer-space-windows">8.09MB (Disk free space: 31.1MB)</li>
                <li class="explorer-space-recycle-bin">0 bytes</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>`
}