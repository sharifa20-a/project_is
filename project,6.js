<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> <!-- تضمين مكتبة Font Awesome -->
    <style>
        body, html {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .background {
            background-image: url('https://source.unsplash.com/1600x900/?city,night'); /* صورة خلفية جذابة */
            background-size: cover;
            background-position: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-container {
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            width: 350px;
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 20px;
            color: #333;
            font-size: 24px;
            font-weight: 600;
        }
        .login-container input {
            width: calc(100% - 40px); /* مساحة لتوفير مكان للأيقونات */
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 16px;
            padding-left: 40px; /* لتوفير مساحة للأيقونة */
        }
        .input-container {
            position: relative;
            margin-bottom: 20px;
        }
        .input-container i {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #aaa;
        }
        .input-container .password-eye {
            right: 10px;
            left: auto;
        }
        .login-container button {
            width: 100%;
            padding: 12px;
            border: none;
            background: #6a1b9a; /* لون بنفسجي */
            color: white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background 0.3s ease;
        }
        .login-container button:hover {
            background: #4a148c; /* لون بنفسجي داكن عند المرور */
        }
    </style>
</head>
<body>
    <div class="background">
        <div class="login-container">
            <h2>تسجيل الدخول</h2>
            <form>
                <div class="input-container">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="البريد الإلكتروني" required>
                </div>
                <div class="input-container">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="password" placeholder="كلمة المرور" required>
                    <i class="fas fa-eye password-eye" id="toggle-password"></i>
                </div>
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>
    </div>
    <script>
        document.getElementById('toggle-password').addEventListener('click', function () {
            const passwordField = document.getElementById('password');
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    </script>
</body>
</html>