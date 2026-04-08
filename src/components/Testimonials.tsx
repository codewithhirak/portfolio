const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">"Hirak did an amazing job on our project. Highly recommend!"</p>
                        <h3 className="text-lg font-semibold">Jane Doe</h3>
                        <span className="text-sm text-gray-500">CEO, Company A</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">"Professional and efficient. Delivered beyond expectations."</p>
                        <h3 className="text-lg font-semibold">John Smith</h3>
                        <span className="text-sm text-gray-500">CTO, Company B</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">"A pleasure to work with. Will hire again for future projects."</p>
                        <h3 className="text-lg font-semibold">Emily Johnson</h3>
                        <span className="text-sm text-gray-500">Founder, Startup C</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;