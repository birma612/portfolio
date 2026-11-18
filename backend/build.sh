#!/usr/bin/env bash
set -o errexit

# Render backend build/deploy steps: install dependencies, collect static files, run migrations.
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate --noinput
