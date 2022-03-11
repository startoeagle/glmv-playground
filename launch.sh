#!/bin/bash
shader=$(cat myshader.frag)
gst-launch-1.0 videotestsrc pattern=ball ! glupload ! glshader fragment="\"$shader\"" ! glimagesink
