#!/usr/bin/env sh

echo ''
echo '------------------------------------'
echo '|        Сборка библиотек "UI"     |'
echo '------------------------------------'

cd ./libs || return

echo ''
echo 'Модуль "Design"'
echo '------------------------------------'
cd ./design && npx yarn build
echo ''
echo 'Модуль "Kit"'
echo '------------------------------------'
cd ../kit && npx yarn build

echo ''
echo '------------------------------------'
echo '|        Сборка модулей "UI"       |'
echo '------------------------------------'

cd ../../modules || return

echo ''
echo 'Модуль "Sign In"'
echo '------------------------------------'
cd ./signIn && npx yarn build
echo ''
echo 'Модуль "Sign Up"'
echo '------------------------------------'
cd ../signUp && npx yarn build
echo ''
echo 'Модуль "Reset Password"'
echo '------------------------------------'
cd ../resetPassword && npx yarn build
echo ''
echo 'Модуль "Confirm Email"'
echo '------------------------------------'
cd ../confirmEmail && npx yarn build

exit 0
