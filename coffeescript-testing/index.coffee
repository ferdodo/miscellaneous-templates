{ get } = require "axios"
{ get : getProperty } = require "lodash"

do ->


  
  
  test = "Get Google page"
  await do ->
    try
      { status } = await get "https://www.google.com"
      unless status is 200
        throw "#{test} has bad status !"
    catch error
      throw "#{test} has failed ! \n #{error.stack or error}"

      

      
  test = "Get bad Google page"
  await do ->
    try
      await get "https://www.google.com/this/page/does/not/exist"
      throw "#{test} should fail !"
    catch error
      status = getProperty error, "response.status"
      unless status is 404
        throw "#{test} has bad status ! \n #{error.stack or error}"


        
        
  console.log "~~~~ All tests are successful ! ~~~~"
