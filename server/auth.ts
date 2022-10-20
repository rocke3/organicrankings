const env = useRuntimeConfig();
import jwt from "jsonwebtoken";
import md5 from "md5";

const sign = (jwtData: Object) => {
	return jwt.sign(jwtData, env.jwtSecret, { expiresIn: "3h" });
};

const verify = (jwtToken) => {
	return jwt.verify(jwtToken, env.jwtSecret, function (err, decoded) {
		if (!err) {
			return decoded;
		} else {
			return false;
		}
	});
};

const userAgent = (agent) => {
	return md5(agent.replace(/\s/g, "").toLowerCase() + env.agentSecret);
};

export default {
	sign: sign,
	verify: verify,
	userAgent: userAgent,
};
