# GreenBreadProject

# API Structure

백앤드 개발은 Firebase Server를 통하여 구현하였다. 실제 개발에서는 Rest API 대신 react-native-firebase에서 내장된 함수를 사용하였으나, 본 문서에서는 Rest API 형태로 설명하였다. 

참고 문헌 : https://rnfirebase.io/

## 1. 사용자 인증

참고 문헌 : https://firebase.google.com/docs/reference/rest/auth

### 이메일 / 비밀번호로 회원 가입

- ------

  You can create a new email and password user by issuing an HTTP `POST` request to the Auth `signupNewUser` endpoint.

- Method : POST

- Content Type: application/json

- Endpoint

  ```python
  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  ```

- Request Body Payload

  | Property Name     | Type    | Description                                                  |
  | ----------------- | ------- | ------------------------------------------------------------ |
  | email             | string  | The email for the user to create.                            |
  | password          | string  | The password for the user to create.                         |
  | returnSecureToken | boolean | Whether or not to return an ID and refresh token. Should always be true. |

- Response Payload

  | Property Name | Type   | Description                                               |
  | ------------- | ------ | --------------------------------------------------------- |
  | idToken       | string | A Firebase Auth ID token for the newly created user.      |
  | email         | string | The email for the newly created user.                     |
  | refreshToken  | string | A Firebase Auth refresh token for the newly created user. |
  | expiresIn     | string | The number of seconds in which the ID token expires.      |
  | localId       | string | The uid of the newly created user.                        |

- Sample request

  ```
  curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' \
  -H 'Content-Type: application/json' \
  --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]
  ```

- Sample Response

  ```
  {
    "idToken": "[ID_TOKEN]",
    "refreshToken": "[REFRESH_TOKEN]",
    "expiresIn": "3600"
  }
  ```

  

### 이메일 / 비밀번호로 회원 가입

- ------

  You can sign in a user with an email and password by issuing an HTTP `POST` request to the Auth `verifyPassword` endpoint.

- Method : POST

- Content Type: application/json

- Endpoint

  ```python
  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  ```

- Request Body Payload

  | Property Name     | Type    | Description                                                  |
  | ----------------- | ------- | ------------------------------------------------------------ |
  | email             | string  | The email the user is signing in with.                       |
  | password          | string  | The password for the account.                                |
  | returnSecureToken | boolean | Whether or not to return an ID and refresh token. Should always be true. |

- Response Payload

  | Property Name | Type    | Description                                               |
  | ------------- | ------- | --------------------------------------------------------- |
  | idToken       | string  | A Firebase Auth ID token for the authenticated user.      |
  | email         | string  | The email for the authenticated user.                     |
  | refreshToken  | string  | A Firebase Auth refresh token for the authenticated user. |
  | expiresIn     | string  | The number of seconds in which the ID token expires.      |
  | localId       | string  | The uid of the authenticated user.                        |
  | registered    | boolean | Whether the email is for an existing account.             |

- Sample request

  ```
  curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]' \
  -H 'Content-Type: application/json' \
  --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'
  ```

  A successful request is indicated by a `200 OK` HTTP status code. The response contains the Firebase ID token and refresh token associated with the existing email/password account.

- Sample Response

  ```
  {
    "localId": "ZY1rJK0eYLg...",
    "email": "[user@example.com]",
    "displayName": "",
    "idToken": "[ID_TOKEN]",
    "registered": true,
    "refreshToken": "[REFRESH_TOKEN]",
    "expiresIn": "3600"
  }
  ```

  **Common error codes**

  - EMAIL_NOT_FOUND: There is no user record corresponding to this identifier. The user may have been deleted.
  - INVALID_PASSWORD: The password is invalid or the user does not have a password.
  - USER_DISABLED: The user account has been disabled by an administrator.



## 2. 가게 관련 데이터

참고 문헌 : https://cloud.google.com/firestore/docs/use-rest-api?hl=ko

### 가게 정보

------

You can get information of store by issuing an HTTP `GET` request to the `storeId` endpoint.

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  GET https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/store/{STORE_ID}
  ```

* Path parameters

  | Parameter Name | Type   | Description |
  | -------------- | :----- | ----------- |
  | store_id       | string | ID of Store |

* Request body

  The request body must be empty

* Response body

  If successful, the response body contains an instance of `Database`

  | Property Name | Type   | Description                               |
  | ------------- | ------ | ----------------------------------------- |
  | openState     | string | 세일 판매 상태. open 또는 ready 또는 null |
  | openTime      | string | 마감 세일 판매 시작 시간                  |
  | addr          | string | 가게 주소                                 |
  | title         | string | 가게명                                    |
  | phone         | string | 전화번호                                  |

* Sample Response

  ```
  {
  	"openState": {
        "stringValue": "open"
      },
      "openTime": {
        "stringValue": "21:00"
      },
      "addr": {
        "stringValue": "월평동"
      },
      "title": {
        "stringValue": "콜마르 브레드"
      },
      "phone": {
        "stringValue": "010-1234-5678"}
  ```

### 가게 판매 상품 정보

------

You can get product information of store by issuing an HTTP `GET` request to the `storeId` and `productId` endpoint.

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  GET https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/store/{STORE_ID}/product/{PRODUCT_ID}
  ```

* Path parameters

  | Parameter Name | Type   | Description   |
  | -------------- | :----- | ------------- |
  | store_id       | string | ID of store   |
  | product_id     | string | ID of product |

* Request body

  The request body must be empty

* Response body

  If successful, the response body contains an instance of `Database`

  | Property Name | Type    | Description             |
  | ------------- | ------- | ----------------------- |
  | amount        | integer | 판매 상품의 잔여 수량   |
  | origin_price  | integer | 판매 상품의 정가        |
  | dc_price      | integer | 판매 상품의 할인가      |
  | rate          | integer | 판매 상품의 할인율 (%)  |
  | description   | string  | 판매 상품에 대한 설명   |
  | img_path      | string  | 판매 상품의 이미지 경호 |
  | title         | string  | 판매 상품명             |

* Sample request

  ```
  GET https://firestore.googleapis.com/v1/projects/greenbread-e0992/databases/(default)/documents/store/sTIou28KeGsdwCbE4KKn/product/1JTBHXWKkpz8y9FjYKNs
  ```

* Sample Response

  ```
  	"amount": {
        "integerValue": "19"
      },
      "origin_price": {
        "integerValue": "1000"
      },
      "rate": {
        "integerValue": "50"
      },
      "description": {
        "stringValue": "부드러운 생크림과 팥앙금이 어우러져 냉동시켜 드시면 더 특별한 맛을 느낄 수 있는 앙금빵입니다."
      },
      "img_path": {
        "stringValue": "콜_단팥빵.jpg"
      },
      "title": {
        "stringValue": "단팥빵"
      },
      "dc_price": {
        "integerValue": "750"
      }
  ```



### 가게 주문 정보

------

You can get product information of order on store by issuing an HTTP `GET` request to the `storeId` and `orderId`endpoint. The `orderId` should be included in order in `user`

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  GET https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/store/{STORE_ID}/order/{ORDER_ID}
  ```

* Path parameters

  | Parameter Name | Type   | Description |
  | -------------- | :----- | ----------- |
  | store_id       | string | ID of store |
  | order_id       | string | ID of order |

* Request body

  The request body must be empty

* Response body

  If successful, the response body contains an instance of `Database`

  | Property Name | Type    | Description                             |
  | ------------- | ------- | --------------------------------------- |
  | user          | integer | ID of user                              |
  | state         | integer | 주문 상태. ready 또는 checked 또는 done |
  | orders        | array   | 주문한 상품들의 정보                    |
  | totalPrice    | integer | 주문한 상품의 총 금액                   |
  | date          | string  | 주문 일시                               |

* Sample request

  ```
  GET https://firestore.googleapis.com/v1/projects/greenbread-e0992/databases/(default)/documents/store/sTIou28KeGsdwCbE4KKn/order/0MU4jfj4hsaWO2heV6Jg
  ```

* Sample Response

  ```
  {
      "user": {
      	"stringValue": "wIFORTNZaeaK5PK6a6y8BPqMBDG2"
      },
      "state": {
      	"stringValue": "done"
      },
      "orders": {
          "arrayValue": {
              "values": [
            {
              "mapValue": {
                "fields": {
                  "productId": {
                    "stringValue": "IwLysEtT4oPueQDfo6m3"
                  },
                  "price": {
                    "integerValue": "850"
                  },
                  "amount": {
                    "integerValue": "1"
                  }
                }
              }
            }
  
              ]
          }
      },
      "totalPrice": {
      	"integerValue": "850"
      },
      "date": {
      	"stringValue": "2022. 12. 14. 오후 7:48:47"
      }
  }
  ```



## 2. 사용자 관련 데이터

참고 문헌 : https://cloud.google.com/firestore/docs/use-rest-api?hl=ko

### 판매자 정보 업데이트

------

You can check the type of a user by issuing an HTTP `GET` request to the Auth `userId` endpoint.

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/user/[USER_ID]
  ```

* Request Body Payload

  | Property Name | Type   | Description |
  | ------------- | :----- | ----------- |
  | id            | string | User ID     |

* Response Payload

  | Property Name | Type       | Description                             |
  | ------------- | ---------- | --------------------------------------- |
  | owner         | boolean    | True if user is owner, else it is False |
  | storeId       | string     | Id of store if user is owner            |
  | order         | Collection | Collection of order is user is customer |

* Sample Response

  * For owner

  ```
  {
    "owner": "true",
    "storeId": "[ID_TOKEN]",
  }
  ```

  * For customer

  ```
  {
    "order": {...}
  }
  ```



### 사용자 구분 확인하기

------

You can check the type of a user by issuing an HTTP `GET` request to the Auth `userId` endpoint.

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  GET https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/user/{USER_ID}
  ```

* Path parameters

  | Parameter Name | Type   | Description |
  | -------------- | :----- | ----------- |
  | user_id        | string | User ID     |

* Request body

  The request body must be empty

* Response body

  If successful, the response body contains an instance of `Database`

  | Property Name | Type       | Description                             |
  | ------------- | ---------- | --------------------------------------- |
  | owner         | boolean    | True if user is owner, else it is False |
  | storeId       | string     | Id of store if user is owner            |
  | order         | Collection | Collection of order is user is customer |

* Sample Response

  * For owner

  ```
  {
    "owner": "true",
    "storeId": "[ID_TOKEN]",
  }
  ```

  * For customer

  ```
  {
    "order": {...}
  }
  ```



### 소비자 주문정보

------

You can get information of order of user who is not owner by issuing an HTTP `GET` request to the `userId` and `orderId`endpoint.

* Method : GET

* Content Type: application/json

* Endpoint

  ```python
  GET https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/user/{USER_ID}/order/{ORDER_ID}
  ```

* Path parameters

  | Parameter Name | Type   | Description |
  | -------------- | :----- | ----------- |
  | user_id        | string | ID of User  |
  | order_id       | string | ID of order |

* Request body

  The request body must be empty

* Response body

  If successful, the response body contains an instance of `Database`

  | Property Name | Type    | Description                             |
  | ------------- | ------- | --------------------------------------- |
  | storeId       | integer | ID of store                             |
  | state         | integer | 주문 상태. ready 또는 checked 또는 done |
  | orders        | array   | 주문한 상품들의 정보                    |
  | totalPrice    | integer | 주문한 상품의 총 금액                   |
  | date          | string  | 주문 일시                               |

* Sample request

  ```
  GET https://firestore.googleapis.com/v1/projects/greenbread-e0992/databases/(default)/documents/user/wIFORTNZaeaK5PK6a6y8BPqMBDG2/order/0MU4jfj4hsaWO2heV6Jg
  ```

* Sample Response

  ```
  {
  	 "orders": {
        "arrayValue": {
          "values": [
            {
              "mapValue": {
                "fields": {
                  "productId": {
                    "stringValue": "IwLysEtT4oPueQDfo6m3"
                  },
                  "amount": {
                    "integerValue": "1"
                  },
                  "price": {
                    "integerValue": "850"
                  }
                }
              }
            }
          ]
        }
      },
      "state": {
        "stringValue": "done"
      },
      "storeId": {
        "stringValue": "sTIou28KeGsdwCbE4KKn"
      },
      "totalPrice": {
        "integerValue": "850"
      },
      "date": {
        "stringValue": "2022. 12. 14. 오후 7:48:47"
      }
  }
  ```

### 가게 판매 상품 정보 업데이트

------

You can update product information of store by issuing an HTTP `POST` request to the `storeId` and `productId` endpoint.

* Method : PACH

* Content Type: application/json

* Endpoint

  ```python
  PATCH https://firestore.googleapis.com/v1/projects/
  greenbread-e0992/databases/(default)/documents/store/{STORE_ID}/product/{PRODUCT_ID}?updateMask.fieldPaths=[FIELD_PATH]
  ```

* Path parameters

  | Parameter Name | Type   | Description   |
  | -------------- | :----- | ------------- |
  | store_id       | string | ID of store   |
  | product_id     | string | ID of product |

* Query Parameters

  | Parameters   |                                                              |
  | ------------ | ------------------------------------------------------------ |
  | `updateMask` | `string (FieldMask format)`The list of fields to be updated.This is a comma-separated list of fully qualified names of fields. Example: `"amount,img_path"`. |

* Request body

  The request body contains an instance of `Database`.

* Response body

  If successful, the response body contains an instance of `Operation`.
