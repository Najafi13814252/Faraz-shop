function Overview({ overview }: {
    overview: {
        id: number;
        title: string;
        value: number;
        desc?: string;
    }[]
}) {
    return (
        <div>
            <section className="grid grid-cols-4 gap-6">
                {overview.map(item => (
                    <div key={item.id} className="border border-gray-100 shadow rounded-xl p-4">
                        <p className="text-gray-500">{item.title}</p>
                        <span className="text-3xl">{item.value}</span>
                        {item.desc && (
                            <div>
                                <hr className="my-2 text-gray-100" />
                                <p className="text-green-500">{item.desc}</p>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Overview
