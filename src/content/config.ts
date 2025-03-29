import {z, defineCollection } from 'astro:content';

const products = defineCollection({
    loader: async () => {
            const res = await fetch('https://script.google.com/macros/s/AKfycbwfsMysn2Y0tPu2o0IX8BkLaml2Zp1WfO253QkjpMH7vcvRhUQy9rL3WjOv2HKOroRnhQ/exec', {cache: 'no-cache'})
            const data = await res.json()
            return data.data.map((item: any) => ({
                ...item,
                id: String(item.id), // Convert to string
                price: Number(item.price)
            }));
        
    },
    schema: z.object({
        category: z.string().optional().default(''),
        name: z.string(),
        desc: z.string(),
        price: z.number(),
        id: z.string()
    })
})

export const collections = {products}
