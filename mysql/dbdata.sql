CREATE TABLE `users` (
`id` int(11) AUTO_INCREMENT,
`username` varchar(50),
`password` varchar(200),
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `users` (`username`, `password`) VALUES
('Uriel', 'password'),
('Sam', 'p455w0rd'),
('Rick', 'Password'),
('stormageddon', '123456'),
('galliFrey', '_ae%$uo54'),
('TeSt', 'password');
