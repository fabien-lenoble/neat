export async function getAllUsers(): Promise<string[]> {
    const response = await fetch('/api/users');
    return await response.json();
}