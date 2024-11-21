const course={
    courseName:"c++",
    price:888,
    courseTeacher:"E balagruswami"
}

// course.courseteacher         access the value

// object destructring

const {courseTeacher}=course
// E balagruswami

const {courseTeacher : teacher}=course
// E balagruswami



// JSON FROMAT
/*
{
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Byron",
          "last": "Reynolds"
        },
        "location": {
          "street": {
            "number": 774,
            "name": "Taylor St"
          },
          "city": "Bowral",
          "state": "South Australia",
          "country": "Australia",
          "postcode": 4943,
          "coordinates": {
            "latitude": "-88.3958",
            "longitude": "-169.4331"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "byron.reynolds@example.com",
        "login": {
          "uuid": "2b51d29d-0877-482d-bf46-ddbcf56c8752",
          "username": "goldengorilla838",
          "password": "water",
          "salt": "cHEEHiYT",
          "md5": "25716948155da9c2ec4552cb0d145f2c",
          "sha1": "8db5326b7c571e6c54843c6ed6831801b5932195",
          "sha256": "ce838a9ea1c13dd7de4db1d8bfabcd81a448f400baf6a40759ad8cc1f50dd66f"
        },
        "dob": {
          "date": "1991-01-08T10:20:26.872Z",
          "age": 33
        },
        "registered": {
          "date": "2016-05-14T01:09:52.794Z",
          "age": 8
        },
        "phone": "09-3475-4317",
        "cell": "0493-521-010",
        "id": {
          "name": "TFN",
          "value": "707672204"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/80.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
        },
        "nat": "AU"
      }
    ],
    "info": {
      "seed": "7706c729d2b978bf",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }

  */


  /*

    VALUE 

      object		{2}
	results		[1]
	info		{4}

results		[1]
	0		{12}
gender	:	male
	name		{3}
title	:	Mr
first	:	Byron
last	:	Reynolds
	location		{7}
	street		{2}
number	:	774
name	:	Taylor St
city	:	Bowral
state	:	South Australia
country	:	Australia
postcode	:	4943
	coordinates		{2}
latitude	:	-88.3958
longitude	:	-169.4331
	timezone		{2}
offset	:	-3:30
description	:	Newfoundland
email	:	byron.reynolds@example.com
	login		{7}
uuid	:	2b51d29d-0877-482d-bf46-ddbcf56c8752
username	:	goldengorilla838
password	:	water
salt	:	cHEEHiYT
md5	:	25716948155da9c2ec4552cb0d145f2c
sha1	:	8db5326b7c571e6c54843c6ed6831801b5932195
sha256	:	ce838a9ea1c13dd7de4db1d8bfabcd81a448f400baf6a40759ad8cc1f50dd66f
	dob		{2}
date	:	1991-01-08T10:20:26.872Z
age	:	33
	registered		{2}
date	:	2016-05-14T01:09:52.794Z
age	:	8
phone	:	09-3475-4317
cell	:	0493-521-010
	id		{2}
name	:	TFN
value	:	707672204
	picture		{3}
large	:	https://randomuser.me/api/portraits/men/80.jpg
medium	:	https://randomuser.me/api/portraits/med/men/80.jpg
thumbnail	:	https://randomuser.me/api/portraits/thumb/men/80.jpg
nat	:	AU
	info		{4}
seed	:	7706c729d2b978bf
results	:	1
page	:	1
version	:	1.4








    */