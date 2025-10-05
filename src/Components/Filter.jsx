export default function Filter({ search, setSearch, location, setLocation, industry, setIndustry }) {
    return (
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                placeholder="Search for Company Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-1/2"
            />
                        {/* Location dropdown */}

            <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-2 rounded"
            >

                <option value="">All Locations</option>
                <option value="India">India</option>
                <option value="South Korea">South Korea</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="USA">USA</option>
                <option value="Ireland">Ireland</option>

            </select>
 {/* Industry dropdown */}
            <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">All Industries</option>
                <option value="Tech">Tech</option>
                <option value="IT">IT</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Automobile">Automobile</option>
                <option value="Consulting">Consulting</option>
                <option value="Transport">Transport</option>
                <option value="Fintech">Fintech</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Software">Software</option>
                <option value="Conglomerate">Conglomerate</option>
            </select>


        </div>
    );
}
