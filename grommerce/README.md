Request format
Post request format:
URL : "<ENDPOINT>/api/v1"
BODY : {"data":<DATA>,"type":<TYPE>, "action":<ACTION>}

<ENDPOINT> : http://10.41.70.130:3000
<DATA> : Key value pairs of db columns and values
         Ex : {"name":"John","grocer_id":"john-wick","phone":"6753464788","address","pincode":"56789"}

<TYPE> : user/order etc
<ACTION> : add/update/delete