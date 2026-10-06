@echo off
title Portal UAT & Progres Odoo - PT Inti Adhigana Ubaid
echo ========================================================
echo Membuka Portal UAT & Progres Odoo PT Inti Adhigana Ubaid
echo Database: intiwarna-testing-1
echo Server Portal: http://localhost:8088
echo ========================================================
start "" "http://localhost:8088"
python -m http.server 8088 --directory "%~dp0"
pause
