export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          ANN-Based Prediction of Reflection Coefficient in Transmission Lines
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This project uses an Artificial Neural Network (ANN) to predict the reflection coefficient 
          in transmission lines based on load and characteristic impedance. The model is trained on 
          generated data and achieves high accuracy, providing a fast and efficient alternative to 
          analytical calculations.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
          <p className="text-gray-700 mb-4">
            The reflection coefficient is a critical parameter in transmission line analysis, 
            determining how much of an electromagnetic wave is reflected at an impedance discontinuity.
          </p>
          <p className="text-gray-700">
            This application demonstrates the use of artificial neural networks for fast and accurate 
            prediction of these coefficients, offering a practical tool for engineers and researchers.
          </p>
        </div>
      </main>
    </div>
  );
}
