// script.js

// Import library DecisionTree dari ml-cart
const { DecisionTreeClassifier } = mlCart;

// Data latih sederhana dengan ciri-ciri dan jenis kucing
// Fitur: [Ukuran Tubuh, Warna Bulu, Panjang Bulu, Kepribadian]
const trainingData = [
    { features: [1, 1, 1, 0], label: "Maine Coon" },
    { features: [0, 0, 0, 1], label: "Persian" },
    { features: [0, 1, 0, 0], label: "Siamese" },
    { features: [1, 2, 1, 1], label: "British Shorthair" },
    { features: [0, 2, 1, 0], label: "Bengal" },
    // Tambahkan lebih banyak data sesuai kebutuhan
];

// Pisahkan fitur dan label dari data latih
const X = trainingData.map((item) => item.features);
const y = trainingData.map((item) => item.label);

// Buat model Decision Tree
const options = { gainFunction: 'gini', maxDepth: 3, minNumSamples: 2 };
const classifier = new DecisionTreeClassifier(options);
classifier.train(X, y);

// Fungsi untuk prediksi
function classifyCat() {
    const size = parseInt(document.getElementById("size").value);
    const furColor = parseInt(document.getElementById("furColor").value);
    const furLength = parseInt(document.getElementById("furLength").value);
    const personality = parseInt(document.getElementById("personality").value);

    const features = [size, furColor, furLength, personality];
    
    const prediction = classifier.predict([features]);
    document.getElementById("predictionResult").innerText = prediction[0];
}
