const jwt = require('jsonwebtoken');
const secretkey = 'howdoyoudo'; //密钥

// 生成token
const sign = (data = {}) => {
	return jwt.sign(data, secretkey, {
		expiresIn: 60 * 60,
	});
};

// 验证token
const verify = (token) => {
	const vali = jwt.verify(token, secretkey, (error, data) => {
		if (error) {
			return { status: 0, data: 'token验证失败' };
		} else {
			return { status: 1, data: 'token验证成功' };
		}
	});
	return vali;
};

module.exports = {
	sign,
	verify,
};
