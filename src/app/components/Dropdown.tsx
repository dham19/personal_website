// Components
import { useState } from "react";
import DropdownRow from "./DropdownRow";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const tabs = [{ name: "About" }, { name: "Connect" }];

  return (
    /*
        Dropdown menu, show/hide based on menu state.

        Src: https://tailwindui.com/components/application-ui/elements/dropdowns
    */
    <div className="relative inline-block text-left">
      <Bars3Icon
        width={45}
        height={45}
        className={`m-1 mb-2 cursor-pointer ${
          dropdown && "border-2"
        } rounded-lg`}
        onClick={() => setDropdown(!dropdown)}
      />
      {dropdown && (
        <div
          className="absolute text-gray-50 right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-1 mt-1 border-gray-50 border-[1px]"
          onClick={() => setDropdown(false)}
        >
          {/* Settings/Options */}
          <div className="p-1">
            {tabs.map((tab) => (
              <DropdownRow
                key={tab.name}
                title={tab.name}
                href={"/#" + tab.name.toLowerCase()}
              />
            ))}
          </div>
          <div className="p-1">
            <DropdownRow title="Resume" href="/resume.pdf" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
