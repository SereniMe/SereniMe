import Image from "next/image";

export function Avatar(props: { image: string; name: string; title: string }) {
  return (
    <div className="flex items-center justify-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={props.image}
          width="400"
          height="400"
          alt="Avatar"
          className="h-14 w-14 object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export function AvatarImg(props: { image: string }) {
  return (
    <div className="flex-shrink-0 overflow-hidden rounded-full">
      <Image
        src={props.image}
        width="400"
        height="400"
        alt="Avatar"
        className="h-10 w-10 object-cover"
      />
    </div>
  );
}
