module.exports = {
  name: "setversion",
  code: `
$setVar[version;$message[1]]
$onlyIf[$message[1]!=;The versio cant be empty]
$title[Version Set!]
$description[
Set the current Slimer version to **$message[1]**
]
$onlyForUsers[544646066579046401;Only Slimer Developers can use this command!]
`
}