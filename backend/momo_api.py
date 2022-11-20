import json
import uuid
import requests
import hmac
import hashlib

class momo_api():
    def __init__(self):
        # parameters send to MoMo get get payUrl
        self.endpoint = "https://test-payment.momo.vn/v2/gateway/api/create"
        self.accessKey = "F8BBA842ECF85"
        self.secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz"
        self.orderInfo = "pay with MoMo"
        self.partnerCode = "MOMO"
        self.redirectUrl = "https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b"
        self.ipnUrl = "https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b"
        self.amount = "50000"
        self.orderId = str(uuid.uuid4())
        self.requestId = str(uuid.uuid4())
        self.extraData = ""  # pass empty value or Encode base64 JsonString
        self.partnerName = "MoMo Payment"
        self.requestType = "payWithMethod"
        self.storeId = "Test Store"
        self.orderGroupId = ""
        self.autoCapture = True
        self.lang = "vi"

        # before sign HMAC SHA256 with format: accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl
        # &orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId
        # &requestType=$requestType
        rawSignature = "accessKey=" + self.accessKey + "&amount=" + self.amount + "&extraData=" + self.extraData + "&ipnUrl=" + self.ipnUrl + "&orderId=" + self.orderId \
                    + "&orderInfo=" + self.orderInfo + "&partnerCode=" + self.partnerCode + "&redirectUrl=" + self.redirectUrl\
                    + "&requestId=" + self.requestId + "&requestType=" + self.requestType

        # puts raw signature
        # print("--------------------RAW SIGNATURE----------------")
        # print(rawSignature)
        # signature
        h = hmac.new(bytes(self.secretKey, 'ascii'), bytes(rawSignature, 'ascii'), hashlib.sha256)
        self.signature = h.hexdigest()
        # print("--------------------SIGNATURE----------------")
        # print(signature)

    def payment_gen(self):
        # json object send to MoMo endpoint
        data = {
            'partnerCode': self.partnerCode,
            'orderId': self.orderId,
            'partnerName': self.partnerName,
            'storeId': self.storeId,
            'ipnUrl': self.ipnUrl,
            'amount': self.amount,
            'lang': self.lang,
            'requestType': self.requestType,
            'redirectUrl': self.redirectUrl,
            'autoCapture': self.autoCapture,
            'orderInfo': self.orderInfo,
            'requestId': self.requestId,
            'extraData': self.extraData,
            'signature': self.signature,
            'orderGroupId': self.orderGroupId
        }

        # print("--------------------JSON REQUEST----------------\n")
        data = json.dumps(data)
        # print(data)

        clen = len(data)
        response = requests.post(self.endpoint, data=data, headers={'Content-Type': 'application/json', 'Content-Length': str(clen)})

        # f.close()
        # print("--------------------JSON response----------------\n")
        return response.json()

# if __name__=="__main__":
#     a = momo_api("sffds", "100000")
#     res = a.payment_gen()
#     print(res['payUrl'])