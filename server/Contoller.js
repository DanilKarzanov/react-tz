const User = require('./userModel')
const Pizza = require('./pizzaModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const generateAccessToken = id => {
    const payload = {
        id
    }
    return jwt.sign(payload, 'SECRET_KEY', {expiresIn: '24h'})
}


class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 5)
            const user = new User({username, password: hashPassword})
            await user.save()
            return res.json({message: 'Пользователь успешно зарегистрирован'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})

        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getPizzas(req, res) {
        try {
            const pizzas = await Pizza.find()
            res.json(pizzas)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new authController()