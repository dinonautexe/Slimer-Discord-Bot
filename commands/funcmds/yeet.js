module.exports = {
  name: "yeet",
  code: `
$onlyIf[$message[1]!=;You can't yeet nothing!]
$title[YA YEET YA!]
$description[
<@$authorID> yeets <@$mentioned[1]> $random[100;9999] meters away!
]
$thumbnail[https://media.tenor.com/images/5c20d60feaf4d810847bb0c5191135c6/tenor.gif]
$image[https://media.tenor.com/images/5c20d60feaf4d810847bb0c5191135c6/tenor.gif]
`
}