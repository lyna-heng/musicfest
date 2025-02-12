import { useState } from "react";

export default function SearchFilter({items}) {

    const [searchTerm, setSearchTerm] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('all');



    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.stage === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    return (
        <>
            <div className="search-box">
                <label htmlFor="search"> Search by Name: </label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for performances"
                />
            </div>
            <div className="filter-box">
                <label htmlFor="category"> Filter by Category </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all" >All Performances</option>
                    <option value="Main Stage" >Main Stage</option>
                    <option value="Accoustic Stage" >Accoustic Stage</option>
                    <option value="EDM Stage" >EDM Stage</option>
                </select>
            </div>
            <div id="item-list">
                {filteredItems.map(item => (
                    <div key={item.id} className="item">{item.name} ({item.stage}) </div>
                ))}
            </div>
        </>
    )
}