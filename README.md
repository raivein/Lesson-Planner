"# Lesson-Planner" 

How to run~
Step1: Open new terminal
Step2: npm run dev
Testing Register~
Step3: to test backend run postman
Step4: to REGISTER account Add postman localhost:5050/api/data/Register/
Step5: Click "Body"
Step6: Click "RAW"
Step7: Click Text and set Format "JSON"
Step8: Type on the line
{
    "Username":"UsernameYouWant",
    "Password":"PasswordYouWant"
}
Step9: Observe reply under Body-> Pretty-> "message":"yOU ARE NOW REGISTERED"
Step10: Send the same Username and password it will output different line
Step11: Send without username or password it will out different line

Testing Login~
Step12: terminal type require('crypto').randomBytes(64).toString('hex')
Step 13: Create .env file
Step 14: Enter the terminal and copy paste and type on the .env file "ACCESS_TOKEN_SECRET" : with the copy
Step 15: Enter the terminal code and copy paste similar above but "REFRESH_TOKEN_SECRET" : with the new copy





Register
Login
Refresh
Delete


Logout



ForgotPassword
ChangePassword

