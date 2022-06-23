
# Ansible week six project

In this project we are going to write an Ansible playbook(s) to configure the servers created by terraform and then, install the NodeWeightTracker application (including all its dependencies). In addition, after everything we did so far we are ready to move to production. To achieve this we will need to provision 2 identical environments, one for staging and another for production.


![Logo](https://bootcamp.rhinops.io/images/ansible.gif)


## How to use:

First clone this repo to the machine you are going to run ansible on. You will need to setup in inventory file or inventory and config file.
In this file(s) you need to have you connection options and variables. make sure you have all the variables names right and that you have the vars for each of the host groups.







### example of inventory file style INI

```yml
[staging]
server1
server2
...
[staging:vars]
varibale1=value
varibale2=value
varibale3=value

[production]
server1
server2
...
[production:vars]
varibale1=value
varibale2=value
varibale3=value
```
### Variables


(make sure you have them for staging and production separately)

| Variable | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. destination machine user name |


| Variable  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `local_user`      | `string` | **Required**. the user name of the local machine |


|  Variable  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `local_env_folder`      | `string` | **Required**. the path of the .env file without "/home/local_user/" |








