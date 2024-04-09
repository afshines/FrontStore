import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function breadCrumpTiss({ data }: any) {
    return (
        <>
            <Breadcrumbs
                separator="/"
                itemClasses={{
                    separator: "px-2"
                }}

            >
                {
                    data.map((item:any) => {
                        return (
                            <BreadcrumbItem href={item.url}>{item.name}</BreadcrumbItem>
                        )
                    })
                }

            </Breadcrumbs>
        </>
    )
}