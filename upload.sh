#!/bin/bash

scp date.format.js index.html src.js style.css wall.png lemones@badanka.org:public_html/ > /dev/null
echo -e "\033[32m::::> \033[34mUploaded to: http://badanka.org/\033[39m"
