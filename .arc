@app
tenslists

@aws
profile default
region us-west-1
# this will allow you to target the ts files on auto create
runtime deno
timeout 60

@create
autocreate true

@http
get /
get /about
get /create-list
post /submit-list
get /browse
get /setup
get /list

@views

@tables
lists
  listID *String
  userID String
  title String
  item1 String
  item2 String
  item3 String
  item4 String
  item5 String
  item6 String
  item7 String
  item8 String
  item9 String
  item10 String

@indexes
lists
  formState *String
  listID **String
  name byFormState


