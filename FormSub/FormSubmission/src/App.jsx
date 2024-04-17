import  { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // Handle success or show a confirmation message
    })
    .catch(error => console.error('Error submitting form:', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Basic Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-400 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-400 px-3 py-2 rounded-md w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default App;
