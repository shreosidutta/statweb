from flask import Flask, render_template
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'My_$uper_$ecre2_KeY'

@app.route('/')
@app.route('/home')
def index():
    # fetch json data happens here
    # product array is formed here
    # read json, create array, send through render_template('index.html', product_array=product_array)
    product_array = []
    with open('./static/json/products.json', 'r') as file:
        product_array = json.load(file)
    
    return render_template('index.html', product_array=product_array)


if __name__ == '__main__':
    app.run(debug=True)



