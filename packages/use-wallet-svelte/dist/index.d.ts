import * as _algorandecosystem_use_wallet from '@algorandecosystem/use-wallet';
import { WalletId, WalletKey, WalletMetadata, WalletAccount, NetworkId, AlgodConfig, SignMetadata, SignDataResponse, WalletManager } from '@algorandecosystem/use-wallet';
export * from '@algorandecosystem/use-wallet';
import algosdk from 'algosdk';

declare const useWalletContext: (manager: WalletManager) => void;
declare const useWalletManager: () => WalletManager;
declare const useNetwork: () => {
    activeNetwork: {
        readonly current: string;
    };
    networkConfig: Record<string, _algorandecosystem_use_wallet.NetworkConfig>;
    activeNetworkConfig: {
        readonly current: _algorandecosystem_use_wallet.NetworkConfig;
    };
    setActiveNetwork: (networkId: NetworkId | string) => Promise<void>;
    updateAlgodConfig: (networkId: string, config: Partial<AlgodConfig>) => void;
    resetNetworkConfig: (networkId: string) => void;
};
interface Wallet {
    id: WalletId;
    /** Unique key for this wallet instance. Used for skinned WalletConnect instances. */
    walletKey: WalletKey;
    metadata: WalletMetadata;
    accounts: {
        current: WalletAccount[] | undefined;
    };
    isConnected: () => boolean;
    isActive: () => boolean;
    canSignData: boolean;
    canUsePrivateKey: boolean;
    connect: (args?: Record<string, any>) => Promise<WalletAccount[]>;
    disconnect: () => Promise<void>;
    setActive: () => void;
    setActiveAccount: (address: string) => void;
}
declare const useWallet: () => {
    wallets: Wallet[];
    isReady: () => boolean;
    algodClient: {
        readonly current: algosdk.Algodv2;
    };
    activeWallet: () => Wallet | undefined;
    activeWalletAccounts: {
        readonly current: WalletAccount[] | undefined;
    };
    activeWalletAddresses: {
        readonly current: string[] | undefined;
    };
    activeAccount: {
        readonly current: WalletAccount | null | undefined;
    };
    activeAddress: {
        readonly current: string | undefined;
    };
    signData: (data: string, metadata: SignMetadata) => Promise<SignDataResponse>;
    withPrivateKey: <T>(callback: (secretKey: Uint8Array) => Promise<T>) => Promise<T>;
    signTransactions: <T extends algosdk.Transaction[] | Uint8Array[]>(txnGroup: T | T[], indexesToSign?: number[]) => Promise<(Uint8Array | null)[]>;
    transactionSigner: (txnGroup: algosdk.Transaction[], indexesToSign: number[]) => Promise<Uint8Array[]>;
};

export { type Wallet, useNetwork, useWallet, useWalletContext, useWalletManager };
