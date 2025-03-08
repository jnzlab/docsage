interface DiseasePageProps {
    params: Promise<{
        disease_id: string;
    }>
}

export default async function DiseasePage({ params }: DiseasePageProps) {
    const { disease_id } = await params;
    return (
        <h1>Details of Disease { disease_id }</h1>
    );
}