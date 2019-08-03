#plugins 
	```
	jsontots
  		>>copy from postman (json)
	        >>ctr+alt+v
	smscountry(smsgateway)
	waytosms
	nodemon
	morgon
	express
	cryptojs
	ngxtoastr
		>>
	mysql,mysql2(upgarded)
        nodemailer
		>>to send email
	swagger
	passport
	jwtwebtoken (jwt.io)
	uuid
		>>
	readux
		>>state management
	payu
		>>payment gateway
	ng bootsrap
		>>popup
	```
	virtual m/c 
		type -1
			ec6
		type -2
			vmware,virtual box
		containerization
			docker

##web:
	```
	css3generator
	Docker
		>>Build, Share, and Run Any App, Anywhere (ci cd ct)
	ng bootsrap
	```
tslint.json --semicolon :
            make it false

canActivate:auth guarding
		guarding all angular modules before routing
		ex : if user is logged in or not
services must be added into providers
http interceptor



deploy
1)without docker
	dist -> compiled filed
	ng serve -> starts lite server 
		   convert file into temp js
	create bulid -
		ng build (development configuration)
		ng build --prod
			creates js files and create folder dist
	
	chmod 400 /Downloads/test...pem (go for north-virginia)
	.pem file should only have owner read mode 
	ssh -i /Downloads/test...pem ubuntu(username)@----(public ip)
		steps:
			1) sudo apt-get update
			2) sudo apt-get install nodejs
			3)			npm
			4)sudo apt-get install mysql-server
			5)local m/c
				  mysql -u root -p
				  mysqldump -u root -p ecommerce( dbname) >  path/ecommerce.sql   (create dump)
			6)again on aws
			 mysql -u root -p
			 we have to change pass
			alter user '' 'By root';
			7) mysql -u root -p
			8)create database ecommerce
			9)local m/c
				scp -i .....pem  path/ecommerce.sql(pathtodump) ubuntu@ip:~/
			10)again on aws
				mysql -u root -p ecommerce < ecommerce.sql
			11)github
				create two  repos
				for server and client
			12)ecommerce 	(server and client)
					/server
					git init
					git remote add remote_name (delete node_modules)
			13)remove dump
			14)git clone gitrepos_add
			15)npm install(it will install all dependencies from look at by package.json)
			16)node server.js
				1)nohub (it will not restart automatically)  so not recoomended
				  nohub node server.js & (lsof -i:4000(port no)) kill pid
				  how to open port go to aws
					inbound (it will not restart automatically)  
					edit  custome tcp tcp 4000 anywhere	
				2)express -->process manager -->Forever(go for it)
					sudo npm install-g forever
 					forever list (gives all processs)
					forever start -l server.log(logging file) server.js
			17)logout	
			
        gitignore ignorefiles when we are moving folder to git
		moving client 
			18)/client
				git init
			19)ng build --prod (its only for angular (ts>>js))
				now we got dist
			20)archiev all dist file
			21)ssh -i D....pem ubuntu@ip
			22)scp -i .....pem  path/archive(pathtoarchiev) ubuntu@ip:/
			23)sudo apt-get install apache2
				var/www/html/
			24)securiy groups /inbound open 80
			25)sudo mv  archive  var/www/html/
			26)sudo apt-get install unzip
				sudo unzip archivefile
			27)to get domain name
				dot.tk/freennom
			28)services ->route 53 ->gets startes -->dmainname
				configuartion
			29)freename
				copy configuartion
			30)

 2) Contanirized(docker sworm to avoid horizontal scaling)
		docker ps -a(list of conatiner)
		docker iamges (list images)
	we cannot upgrade conatiner unlike vm
	for automatic cicdpipeline & dockerized instances
		no of containers can be created using image(container like an object and image is like class)

  	  	dockerhub
         	docker pull hello-world
		docker hello-world
		docker rm containerId
	
		docker run httpd
		dpcker stop containerId
		
		docker run -d -p 8080(host port):80(containers port) httpd
	
		docker rm $(docker ps -a -q) removes all container
	1) we need 3 container	
		webser(webserver i.e angular)
	        middleware(node) 
		database(mysql)
	database(mysql)
	    create a folder
		DockerFile
			ex:
			#use ubuntu as a base os
			FROM ubuntu	
			#install mysql
			RUN  apt-get update && apt-get install mysql-server
			docker bulid -t mysqlserver -y
		dockerFile:
			FROM mysql:5.7
			MYSQL_ROOT_PASSWORD "root" 
			MYSQL_DATABASE "ecommerce"
			EXPOSE 
			docker build -t dbserver .


			create container
			docker run -d -p 9090(host port):3306(containers port) --name mydbserver(name given to conatiner) dbserver(image name)
			docker ps -a
	
			mysql -u root -p (local mysql)
			mysql -u root -p -P 9090 --protocol=tcp(tcp tunneling) (containers mysql)
		
			mysql>

	server
		DockerFile
			#use node base image if it is present else it will download and use
  			FROM   node
			#set the work directory
			WORKDIR /code
			#work dir in container
			COPY . .
			#RUN npm install //if it is not installed
			#RUN npm install-g forever //if we want usig forever
			EXPOSE 4000
			#run the server
			CMD node server.js //when  conatiner  is created then we use CMD .or to building image we use RUN 
			#CMD forever start -l server.log(logging file) server.js //if we want usig forever
		

			docker logs

			docker rmi 
	webser(webserver i.e angular)(IAS,PAS ,CAS(code as service))
		 	we need js from so for that build the code
		 DockerFile
			#use httpd (pres installed web server)
			WORKDIR /usr/local/apache2/
			COPY ./dist/client .
			EXPOSE 80
			CMD apachectl -D FOREGROUND
		build image
		docker build -t myapp(tagname) .(DockerFile path ie. here is current dir)
		create container 
		docker run -d -p 8888(host port):80(containers port) --name myapp(name given to conatiner) myapp(image name)
	docker volume
             docker run -d -p 8888:80 --name myapp(name given to conatiner) -v currdirie. .../client:/var/www/html  myapp(image name)
	to delete image we have to stop it first


3)jenkins
	.war file
	java -jar filepath to wirefile	
		new item mywebserver	freestyle project githubproject 
		build-->executing shell
		npm install
		#create image
		docker build -t myserver .
		#create conatiner
		docker run -d -p 8888(host port):80(containers port) --name myapp(name given to conatiner) myapp(image name)
			 
  				

