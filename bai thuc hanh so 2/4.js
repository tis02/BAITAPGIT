var calculator = {
    calculateBMI: function() {
      var height = document.getElementById('height').value;
      var weight = document.getElementById('weight').value;
      var age = document.getElementById('age').value;
  
      if (height === '' || weight === '') {
        alert('Hãy nhập cân nặng và chiều cao của bạn.');
        return;
      }
  
      height = parseFloat(height) / 100; 
      weight = parseFloat(weight);
      
      var bmi = weight / (height * height);
      var bmiResult = 'Kết quả ' + bmi.toFixed(2) + '. ';
  
      if (bmi < 18.5) {
        bmiResult += 'Dưới chuẩn';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiResult += 'Bình thường';
      } else if (bmi >= 25 && bmi < 30) {
        bmiResult += 'Thừa cân';
    } else if (bmi >= 30 && bmi < 35) {
        bmiResult += 'Béo phì cấp độ I. Khám định kì';
    } else if (bmi >= 35 && bmi < 40) {
        bmiResult += 'Béo phì cấp độ II. Tập thể dục thường xuyên';
    
    } else {
        bmiResult += 'Béo phì cấp độ III.Hạn chế ăn mỡ động vật';
      }
  
      document.getElementById('result').innerText = bmiResult;
    }
  };
  
  function calculateBMI() {
    calculator.calculateBMI();
  }
  